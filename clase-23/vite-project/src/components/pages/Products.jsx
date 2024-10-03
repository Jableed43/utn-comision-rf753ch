import Page from "../layout/page";
import Characters from "../API/Characters";

function Products() {
  return (
    <>
      <Page gap={true}>
        <Characters />
      </Page>
    </>
  );
}

export default Products;
