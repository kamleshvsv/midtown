import React, { useState } from "react";
export default function ScriptPakFeatures() {
  return (
    <div className="scriptpak-features">
      <h2>Manage your medications—in a better way.</h2>{" "}
      <div className="container">
        <div className="left-part">
          <img
            width="794"
            height="750"
            src="https://scriptsiterx.wpenginepowered.com/wp-content/uploads/2018/06/ScriptPak_ProductImg.png"
            className="attachment-full size-full"
            alt=""
            decoding="async"
            srcset="https://scriptsiterx.wpenginepowered.com/wp-content/uploads/2018/06/ScriptPak_ProductImg.png 794w, https://scriptsiterx.wpenginepowered.com/wp-content/uploads/2018/06/ScriptPak_ProductImg-300x283.png 300w, https://scriptsiterx.wpenginepowered.com/wp-content/uploads/2018/06/ScriptPak_ProductImg-768x725.png 768w"
            sizes="(max-width: 794px) 100vw, 794px"
          />{" "}
        </div>
        <div className="right-part">
          <ul>
            <li>
              <h5>Organized Information</h5>
              <p>
                Complete medication list and description are included for more
                accurate medication management.
              </p>
            </li>

            <li>
              <h5>Perforated Blisters</h5>
              <p>
                Each blister has perforated edges making it easy to take only
                the medication you need.
              </p>
            </li>

            <li>
              <h5>Strategic Labeling</h5>
              <p>
                The perforated blister packs are color-coded to allow for
                specific intake times.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
