import React, { memo, useCallback, useLayoutEffect, useMemo, useState } from "react";

import data, { searchResult } from "../data";
import Content from "./content";
import Loading from "./loading";
import Categories from "./categories";
import Pagination from "./pagination";
import Search from "./search";
import NoResults from "./noResults";
import WrongUser from "./wrongUser";

const Headerbar = BdApi.Webpack.getModule(m=> m.Title && m.Icon);
const Globe = BdApi.Webpack.getModule(m => m.toString?.().includes("16H15V13C15 12.45 14.55"));
const Link = BdApi.Webpack.getModule(m => m.toString?.().includes("4.24 0l3.53-3.53a2.982"));
const transitionTo = BdApi.Webpack.getModule((m) => typeof m === "function" && String(m).includes(`"transitionTo - Transitioning to "`), { searchExports: true }) as (pathname: string) => void;
const { container, tabBody } = BdApi.Webpack.getModule(m => m.container && m.tabBody);
const UserStore = BdApi.Webpack.getModule(m => m.getName?.() === "UserStore");
const useStateFromStores = BdApi.Webpack.getModule(m => m.toString().includes("useStateFromStores"));

// https://stackoverflow.com/questions/47945095/react-router-how-to-replace-dynamically-parameters-in-a-string
function getRoute(path: string, ...args: string[]) {
  let count = -1;
  return path.replace(/:[a-zA-Z?]+/g, function (match) {
    count += 1;
    return args[count] !== undefined ? args[count] : match;
  });
};

function Page(props: { match: { params: { category: string, page: string } } }) { 
  const currentUser = useStateFromStores([ UserStore ], () => UserStore.getCurrentUser());

  const state = data.useState();

  const [ searchResults, setSearchResults ] = useState<searchResult | null>(null);
  const [ loading, setLoading ] = useState(true);

  const page = useMemo(() => Number(props.match.params.page), [ props.match.params.page ]);
  const setPage = useCallback((page: number) => {
    transitionTo(getRoute("/publicServers/:category/:page", props.match.params.category, page.toString()));
  }, [ page, props.match.params.category ]);

  const [ numPages, setNumPages ] = useState(NaN);

  useLayoutEffect(() => {
    return () => setNumPages(NaN);
  }, [ props.match.params.category ]);
  useLayoutEffect(() => {
    return () => setLoading(true);
  }, [ props.match.params.category, page ]);
  useLayoutEffect(() => {
    if (page <= 0) return setPage(1);
    if (Number.isNaN(numPages)) return;
    if ((numPages - page) < 0) setPage(numPages);
  }, [ page, numPages ]);

  useLayoutEffect(() => {
    const abortController = new AbortController();

    const { category } = props.match.params;
    if (category === "featured" || category === "popular") {
      setSearchResults(data[category]);
      setLoading(false);
      setNumPages(1);
      return;
    };

    const keyword = category === "all" ? "" : category;

    data.search(keyword, page).then((res) => {
      if (abortController.signal.aborted) return;
      setSearchResults(res);
      setLoading(false);
      setNumPages(res.numPages);
    });

    return () => abortController.abort();
  }, [ props.match.params.category, page ]);

  const wrongUser = useMemo(() => state.id ? currentUser.id !== state.id : false, [ currentUser, state ]);
  
  return (
    <main className={container}>
      <Headerbar
        hideSearch={false}
        transparent={false}
        toolbar={[
          <Search
            category={props.match.params.category}
            loading={loading}
          />,
          <Headerbar.Icon 
            icon={Link}
            onClick={() => data.connect()}
            disabled={state.authToken}
            tooltip={state.authToken ? "Connected" : "Connect"}
          />
        ]}
        mobileToolbar={[ ]}
      >
        <Headerbar.Icon icon={Globe} />
        <Headerbar.Title level={1}>Public Servers</Headerbar.Title>
      </Headerbar>
      <div className={tabBody}>
        {state.loading ? <Loading /> : wrongUser ? <WrongUser /> : (
          <>
            <div className="pb-content">
            <Pagination searchResults={{ numPages, page } as searchResult} page={{ number: page, set: setPage }} />
              {loading ? <Loading /> : searchResults!.servers.length ? (
                <Content searchResults={searchResults!} />
              ) : (
                <NoResults />
              )}
            </div>
            <Categories category={props.match.params.category} />
          </>
        )}
      </div>
    </main>
  );
};

export default memo(Page);