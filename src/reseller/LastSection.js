import React from "react";
import "./LastSection.css";

const LastSection = () => {
  return (
    <section className="ui-related-posts">
      <div className="uicore-container">
        <div className="uicore-row">
          <h3>You may also like</h3>
          <div className="uicore-grid-container">
            <div className="uicore-grid-item">
              <article className="uicore-post">
                <div className="uicore-post-wrapper">
                  <div className="uicore-post-info">
                    <div className="uicore-post-info-wrapper">
                      <div className="uicore-post-category">
                        <a href="https://matrixiptv.net/category/blog/">
                          Blog
                        </a>
                      </div>
                      <a
                        href="https://matrixiptv.net/hello-world/"
                        title="View Post: Hello world! "
                      >
                        <h4 className="uicore-post-title">
                          <span>Hello world!</span>
                        </h4>
                      </a>
                      <p>
                        Welcome to WordPress. This is your first post. Edit or
                        delete it, then start writing!
                      </p>
                      <div className="uicore-post-footer">
                        <span>
                          <a
                            href="https://matrixiptv.net/author/molomolo/"
                            rel="author"
                          >
                            Maxie Hester
                          </a>
                        </span>
                        <span className="uicore-meta-separator">|</span>
                        <span>July 7, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
