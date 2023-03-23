import container from "./container";
import sidebar from "./sidebar";
import views from "./views";

export function patch() {
  container.patch();
  sidebar.patch();
  views.patch();
};
export function unpatch() {
  container.unpatch();
  sidebar.unpatch();
  views.unpatch();
};