import React from "react";
import Modal from "@/components/common/Modal";

// Page component for the modals demo/showcase
export default function ModalsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Modal Components</h1>
      <p className="mb-4">This page showcases modal components used throughout the application.</p>
      
      <Modal
        id="example-modal"
        title="Example Modal"
        content={<p>This is an example modal content.</p>}
        onCloseText="Close"
      />
    </div>
  );
}