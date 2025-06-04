import React, { useState } from 'react';
import EditableTitle from '../components/EditableTitle';
import EditableContent from '../components/EditableContent';
import '../styles/App.css';

const Terms = ({ title, setTitle }) => {
  const [content, setContent] = useState("These terms and conditions ('the Terms') govern your use of this website.");

  return (
    <div className="page-container terms-page">
      <EditableTitle title={title} setTitle={setTitle} />
      <div className="content-gap" />
      <EditableContent content={content} setContent={setContent} />
    </div>
  );
};

export default Terms;