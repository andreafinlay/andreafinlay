import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyles = createGlobalStyle<{
    theme: Theme;
}>`
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-y: hidden;
}
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  transition: all 0.1s linear;
  overflow-y: hidden;
}
main {
  height: 100%;
  display: block;
}
a {
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
a:hover {
  text-decoration: underline;
}
h1 {
  margin: 0.67em 0;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "NTR", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.25rem;
  line-height: 1.1;
}
h2 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "NTR", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.62671rem;
  line-height: 1.1;
}
h3 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "NTR", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.38316rem;
  line-height: 1.1;
}
h4 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "NTR", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  line-height: 1.1;
}
h5 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "NTR", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: "NTR", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.78405rem;
  line-height: 1.1;
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: auto;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  max-height: 400px;
  border: 3px solid;
  border-color: ${({ theme }) => theme.border};
}
svg:not(:root) {
  overflow: hidden;
}
code,
pre, {
  font-family: monospace, monospace;
  font-size: 1em;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: calc(1.45rem - 1px);
  background: hsla(0, 0%, 0%, 0.2);
  border: none;
  height: 1px;
}
button {
  font: inherit;
  margin: 0;
  border: 3px solid;
  border-color: ${({ theme }) => theme.border};
  cursor: pointer;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
  transition: 100ms ease-in-out;
}
button:hover {
  background-color: ${({ theme }) => theme.buttonHover};
  filter: ${({ theme }) => `drop-shadow(4px 4px 0 ${theme.buttonShadow})`};
        transform: translate(-4px, -4px);
}
input,
textarea {
  font: inherit;
  margin: 0;
  background: ${({ theme }) => theme.field};
  color: ${({ theme }) => theme.text};
  border: 3px solid;
  border-color: ${({ theme }) => theme.border};
  padding: 5px;
  resize: none;
}
textarea {
  height: 150px;
}
input:focus,
textarea:focus {
  outline: none;
  border: 3px solid;
  border-color: ${({ theme }) => theme.fieldFocus}
}
label {
  margin-bottom: 8px;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}
ul {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
ol {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}
p {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.1rem;
}
pre {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1.45rem;
  font-size: 0.85rem;
  line-height: 1.42;
  background: hsla(0, 0%, 0%, 0.04);
  overflow: auto;
  word-wrap: normal;
  padding: 1.45rem;
}
table {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1rem;
  line-height: 1.45rem;
  border-collapse: collapse;
  width: 100%;
}
fieldset {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
blockquote {
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
form {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
th {
  font-weight: bold;
}
li {
  margin-bottom: calc(1.45rem / 2);
}
ol li {
  padding-left: 0;
}
ul li {
  padding-left: 0;
}
li > ol {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
li > ul {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
li *:last-child {
  margin-bottom: 0;
}
p *:last-child {
  margin-bottom: 0;
}
li > p {
  margin-bottom: calc(1.45rem / 2);
}
code {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
thead {
  text-align: left;
}
td,
th {
  text-align: left;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  font-feature-settings: "tnum";
  -moz-font-feature-settings: "tnum";
  -ms-font-feature-settings: "tnum";
  -webkit-font-feature-settings: "tnum";
  padding-left: 0.96667rem;
  padding-right: 0.96667rem;
  padding-top: 0.725rem;
  padding-bottom: calc(0.725rem - 1px);
}
th:first-child,
td:first-child {
  padding-left: 0;
}
th:last-child,
td:last-child {
  padding-right: 0;
}
code {
  background-color: hsla(0, 0%, 0%, 0.04);
  font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
    "Liberation Mono", Menlo, Courier, monospace;
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}
pre code {
  background: none;
  line-height: 1.42;
}
code:before,
code:after, {
  letter-spacing: -0.2em;
  content: " ";
}
pre code:before,
pre code:after, {
  content: "";
}
@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}
`;
