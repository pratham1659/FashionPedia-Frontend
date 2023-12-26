import PropTypes from "prop-types";

import "./style.scss";

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

PageNotFound.propTypes = {
  setProgress: PropTypes.func.isRequired,
};
export default PageNotFound;
