import styled from "styled-components";

const PostBody = styled.article`
  h1,
  h2,
  h3,
  h4 {
    margin-top: 30px;
    margin-bottom: 14px;
  }
  h1 {
    font-size: 36px;
    font-weight: 700;
    color: var(--title);
  }
  h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    color: var(--title);
  }
  h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: var(--title);
  }
  h4 {
    font-weight: bold;
    font-size: 20px;
    color: var(--title);
  }
  p {
    margin-bottom: 14px;
  }
  blockquote {
    border-left: 3px solid #f80759;
    color: #1a1a1a;
    font-family: Georgia, Times, "Times New Roman", serif;
    font-size: 1.25em;
    font-style: italic;
    line-height: 1.8em;
    margin: 1.1em -4em;
    padding: 1em 2em;
    position: relative;
    transition: 0.2s border ease-in-out;
    z-index: 0;
  }
  blockquote:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -4px;
    height: 2em;
    background-color: #fff;
    width: 5px;
    margin-top: -1em;
  }
  blockquote:after {
    content: "”";
    position: absolute;
    top: 54%;
    left: -0.5em;
    color: #f80759;
    font-family: "Ionicons";
    font-style: normal;
    line-height: 1em;
    text-align: center;
    text-indent: -2px;
    width: 1em;
    margin-top: -0.5em;
    transition: 0.2s all ease-in-out, 0.4s transform ease-in-out;
    font-size: 3rem;
  }
  blockquote.format:before,
  blockquote.format:after {
    display: none;
  }
  blockquote.book:after {
    content: "";
  }
  blockquote.podcast:after {
    content: "";
  }
  blockquote.lyrics:after {
    content: "";
  }
  blockquote.favorite:after {
    content: "”";
  }
  blockquote:active:after {
    transform: rotateY(360deg);
  }
  blockquote cite {
    display: block;
    font-size: 0.75em;
    line-height: 1.8em;
    margin-top: 1em;
  }
  @media (max-width: 980px) {
    blockquote {
      font-size: 1.1em;
      margin: 1.1em -2em;
    }
  }
  @media (max-width: 767px) {
    blockquote {
      border-top: 2px solid #f80759;
      border-bottom: 2px solid #f80759;
      border-left: none;
      margin: 1.5em 0;
      padding: 1.5em 1em;
    }
    blockquote:before {
      left: 50%;
      top: 0;
      height: 4px;
      margin-top: -3px;
      margin-left: -1em;
      width: 2em;
    }
    blockquote:after {
      font-size: 2rem;
      left: 50%;
      top: 5px;
      margin-top: -0.5em;
      margin-left: -0.5em;
    }
    blockquote cite {
      text-align: right;
    }
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
  }
  table thead {
    background: #f80759;
    color: #fff;
    font-weight: bold;
    white-space: nowrap;
  }
  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export default PostBody;
