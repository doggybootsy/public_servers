import React, { useCallback, useLayoutEffect } from "react";
import ErrorBoundary from "../Boundary";
import Error from "./error";
import Page from "./page";

function Dashboard(props: { history: { push(pathName: string): void }, match: { params: { category: string, page: string } } }) {
  const listener = useCallback((event: KeyboardEvent) => {
    if (!(event.key === "r" && (event.ctrlKey || event.metaKey))) return;
    const url = new URL("/channels/@me", location.origin);
    url.searchParams.append("publicServers", location.pathname);
    const pathname = url.href.replace(url.origin, "");
    props.history.push(pathname);
  }, [ ]);

  useLayoutEffect(() => {
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [ listener ]);

  const reload = useCallback(() => {
    listener({ key: "r", ctrlKey: true } as KeyboardEvent);
    location.reload();
  }, [ ]);

  return (
    <ErrorBoundary fallback={<Error reload={reload} />}>
      <Page {...props} />
    </ErrorBoundary>
  );
};

export default Dashboard;