import React from "react";

const classes = BdApi.Webpack.getModule(m => m.wrapper && m.note);
const { errorPage, buttons } = BdApi.Webpack.getModule(m => m.errorPage);
const Flex = BdApi.Webpack.getModule(m => m.defaultProps?.basis);
const Button = BdApi.Webpack.getModule(m => m.Sizes && m.BorderColors, { searchExports: true });
const intl = BdApi.Webpack.getModule(m => m.Messages);

function Error({ reload }: { reload: () => void }) {
  return (
    <div className={`${classes.wrapper} ${errorPage}`}>
      <Flex
        align={Flex.Align.CENTER}
        justify={Flex.Justify.CENTER}
        direction={Flex.Direction.VERTICAL}
        className={classes.flexWrapper}
        shrink={1}
        grow={1}
      >
        <Flex.Child 
          basis="auto"
          className={classes.image}
          grow={0}
          shrink={1}
          wrap={false}
        />
        <Flex.Child 
          basis="auto"
          className={classes.text}
          grow={0}
          shrink={1}
          wrap={false}
        >
          <h2 className={classes.title}>{intl.Messages.UNSUPPORTED_BROWSER_TITLE}</h2>
          <div className={classes.note}>
            <div>
              <p>{intl.Messages.CRASH_UNEXPECTED.replace("Discord", "Public Servers")}</p>
              <p>{intl.Messages.ERRORS_UNEXPECTED_CRASH.replace("Discord", "Public Servers")}</p>
            </div>
          </div>
        </Flex.Child>
        <div className={buttons}>
          <Button
            size={Button.Sizes.LARGE}
            onClick={reload}
          >{intl.Messages.ERRORS_RELOAD}</Button>
        </div>
      </Flex>
    </div>
  );
};

export default Error;