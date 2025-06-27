import Parent from "./Parent";

const GrandParent = () => {
  return (
    <div>
      <Parent message="Hello, from GrandParent" />
    </div>
  );
};

export default GrandParent;
