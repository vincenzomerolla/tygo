// Code generated by tygo. DO NOT EDIT.

//////////
// source: types.go

export type Hook = string;
export const enum Hook=  {
"on_alt_click",
export const enum Hook=  {
"on_app_start",
export const enum Hook=  {
"on_channel_down",
export const enum Hook=  {
"on_channel_up",
export const enum Hook=  {
"on_click",
export const enum Hook=  {
"on_delayed_focus",
export const enum Hook=  {
"on_display",
export const enum Hook=  {
"on_error",
export const enum Hook=  {
"on_expired",
export const enum Hook=  {
"on_fav_icon_click",
export const enum Hook=  {
"on_first_visit",
export const enum Hook=  {
"on_focus",
export const enum Hook=  {
"on_load",
export const enum Hook=  {
"on_play",
export const enum Hook=  {
"on_play_icon_click",
export const enum Hook=  {
"on_poll",
export const enum Hook=  {
"on_program_change",
export const enum Hook=  {
"on_success",
export const enum Hook=  {
"on_swipe",
export type Type = string;
export const enum Type=  {
"api_call",
export const enum Type=  {
"braze_event",
export const enum Type=  {
"close_all_players",
export const enum Type=  {
"close_app",
export const enum Type=  {
"close_context_menu",
export const enum Type=  {
"close_dialog",
export const enum Type=  {
"close_page",
export const enum Type=  {
"close_player",
export const enum Type=  {
"external_link",
export const enum Type=  {
"filter",
export const enum Type=  {
"form_submit",
export const enum Type=  {
"macro_pixel_tracking",
export const enum Type=  {
"multiview_add",
export const enum Type=  {
"my_stuff_nav",
export const enum Type=  {
"navigation",
export const enum Type=  {
"open_context_menu",
export const enum Type=  {
"open_drawer_panel",
export const enum Type=  {
"open_dropdown",
export const enum Type=  {
"open_panel",
export const enum Type=  {
"play",
export const enum Type=  {
"preview",
export const enum Type=  {
"purchase_subscription",
export const enum Type=  {
"redirect",
export const enum Type=  {
"refresh_app",
export const enum Type=  {
"refresh_component",
export const enum Type=  {
"refresh_page",
export const enum Type=  {
"remote_connect",
export const enum Type=  {
"resume",
export const enum Type=  {
"save_favorite_channel_reorder",
export const enum Type=  {
"scroll_to",
export const enum Type=  {
"search_results",
export const enum Type=  {
"search_suggestions",
export const enum Type=  {
"show_dialog",
export const enum Type=  {
"show_overlay",
export const enum Type=  {
"show_toast",
export const enum Type=  {
"tracking",
export type Template = string;
export const enum Template=  {
"additional-form",
export const enum Template=  {
"auth-landing",
export const enum Template=  {
"catalog",
export const enum Template=  {
"catalog-with-filters",
export const enum Template=  {
"channel-details",
export const enum Template=  {
"context-menu-billing-info",
export const enum Template=  {
"context-menu-default",
export const enum Template=  {
"context-menu-instructions",
export const enum Template=  {
"context-menu-panel-default",
export const enum Template=  {
"default",
export const enum Template=  {
"dialog-default",
export const enum Template=  {
"dialog-promotional",
export const enum Template=  {
"form",
export const enum Template=  {
"guide",
export const enum Template=  {
"learn-more",
export const enum Template=  {
"my-stuff",
export const enum Template=  {
"my-stuff-details",
export const enum Template=  {
"my-stuff-moments",
export const enum Template=  {
"nielsen-template",
export const enum Template=  {
"offer-details",
export const enum Template=  {
"plan-choice",
export const enum Template=  {
"plan-choice-details",
export const enum Template=  {
"plan-choice-periodic",
export const enum Template=  {
"playback",
export const enum Template=  {
"player",
export const enum Template=  {
"profile",
export const enum Template=  {
"program-details",
export const enum Template=  {
"program-details-series",
export const enum Template=  {
"program-details-single",
export const enum Template=  {
"program-details-unified",
export const enum Template=  {
"programs-list",
export const enum Template=  {
"qr-code",
export const enum Template=  {
"reorder-favorites",
export const enum Template=  {
"reset-password",
export const enum Template=  {
"search",
export const enum Template=  {
"settings",
export const enum Template=  {
"settings-account",
export const enum Template=  {
"settings-legals",
export const enum Template=  {
"settings-subscriptions",
export const enum Template=  {
"signin-with-apple",
export const enum Template=  {
"signin-with-email",
export const enum Template=  {
"sign-in",
export const enum Template=  {
"sign-out",
export const enum Template=  {
"sign-up",
export const enum Template=  {
"store-details",
export const enum Template=  {
"tab-bar-container",
export const enum Template=  {
"webview",
export type ComponentType = string;
export const enum ComponentType=  {
"context-menu-billing-choice",
export const enum ComponentType=  {
"context-menu-billing-info",
export const enum ComponentType=  {
"context-menu-confirmation",
export const enum ComponentType=  {
"context-menu-instructions",
export const enum ComponentType=  {
"context-menu-list",
export const enum ComponentType=  {
"context-menu-locked",
export const enum ComponentType=  {
"context-menu-metadata",
export interface Action {
  /**
   * Metadata used to add additionals information for frontends.
   * Used when `Action.Type` is `search_results`, `scroll_to`, `purchase_subscription`, `remote_connect`.
   */
  metadata?: any;
  /**
   * Content used to have directly the payload instead of fetching an API Call.
   * Used for Dialog, Context Menu Panel, Dropdown Menu, Toast.
   */
  content?: any;
  /**
   * IsRoot indicates whether the target of the navigation action is a root (top-level) page or a subpage (presented) page.
   */
  is_root?: boolean;
  /**
   * Endpoint used for API Call with method, url and payload.
   */
  endpoint?: Endpoint;
  /**
   * Type used to define the type of action.
   */
  type: Type;
  /**
   * Template used to define the template to treat for frontends.
   */
  template?: Template;
  /**
   * PublicPath used for web to update the address bar url.
   */
  public_path?: string;
  /**
   * Target used to target the slug on the current screen (used with `Action.Type` = `scroll_to`).
   */
  target?: string;
  /**
   * TargetScreenID used to target screen id to update when using refresh mecanism on `refresh_page`.
   */
  target_screen_id?: string;
  /**
   * ID used for tracking cache mecanism.
   * For example, if ID is setup then for tracking display, it will be triggered only once.
   */
  id?: string;
  /**
   * ScreenID used for frontends.
   */
  screen_id?: string;
  /**
   * ComponentType used for frontends to know the type of context menu used.
   */
  component_type?: ComponentType;
  /**
   * IsBlocking used for waiting or not the result of the action.
   * For example tracking is non blocking but navigation is blocking.
   */
  is_blocking: boolean;
  /**
   * ResetPage used for frontends to completly reset the page after a page refresh.
   */
  reset_page?: boolean;
}
export interface Endpoint {
  /**
   * Payload is the body of the request.
   */
  payload?: { [key: string]: any};
  /**
   * Method is the HTTP method of the request (ex: GET, POST, PUT, etc...).
   */
  method: string;
  /**
   * URL is the full url of the request (ex: https://example.com/my-url?queryParam=1).
   */
  url: string;
}
export const enum string=  {
"action_name",
export const enum string=  {
"params",
export const enum string=  {
"callback_actions",
export const enum string=  {
"metadatas",
export const enum string=  {
"custom_action_data",
