import React from "react";

import "./directory.style.scss";

import MenuItem from "../menu-item/menu-item.component";

//redux
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(
      (
        { id, ...ortherSectionProps } // share all prop properties
      ) => (
        <MenuItem key={id} {...ortherSectionProps} />
      )
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
