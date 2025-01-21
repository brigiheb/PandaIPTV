import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside id="secondary" className="uicore-sidebar uicore-animate">
      <div className="uicore-sidebar-content uicore-sticky">
        
        {/* Search Form */}
        <div className="uicore-widget widget_search">
          <form method="get" id="searchform" className="search-form" action="https://matrixiptv.net/" role="search">
            <label>
              <span className="screen-reader-text">Search for:</span>
              <input type="search" className="search-field" placeholder="Search …" name="s" />
            </label>
            <input type="submit" className="search-submit" value="Search" />
          </form>
        </div>

        {/* Recent Posts */}
        <div className="uicore-widget widget_recent_entries">
          <h4 className="uicore-widget-title">Recent Posts</h4>
          <ul>
            <li>
              <a href="https://matrixiptv.net/best-iptv-reseller-panel-provider/">Best IPTV Reseller Panel Provider 2024 – Review</a>
            </li>
            <li>
              <a href="https://matrixiptv.net/hello-world/">Hello world!</a>
            </li>
          </ul>
        </div>

        {/* Recent Comments */}
        <div className="uicore-widget widget_recent_comments">
          <h4 className="uicore-widget-title">Recent Comments</h4>
          <ul id="recentcomments">
            <li className="recentcomments">
              <span className="comment-author-link">Sidony Bronwyn</span> on 
              <a href="https://matrixiptv.net/best-iptv-reseller-panel-provider/#comment-3">
                Best IPTV Reseller Panel Provider 2024 – Review
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
