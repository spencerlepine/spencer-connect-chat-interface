// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import PT from "prop-types";
 
export const SpriteSymbol = PT.oneOfType([PT.element, PT.func, PT.shape({
  id: PT.string.isRequired,
  viewBox: PT.string.isRequired,
  url: PT.string.isRequired,
  toString: PT.func.isRequired
})]);