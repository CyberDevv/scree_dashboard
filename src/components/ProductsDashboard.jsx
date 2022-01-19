import tw from "twin.macro";
import Link from "next/link";
import { FormControl, Select, MenuItem } from "@mui/material";

import Products from "./Products.jsx";
import { Button } from "./TailwindStyles";
import PlusSVG from "../../public/svg/plus.svg";

const ProductsDashboard = () => {
  const [collection, setCollection] = React.useState("");
  const [filter, setFilter] = React.useState("");

  const handleCollectionChange = (event) => {
    setCollection(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <section css={[tw`pb-16`]}>
      {/* Nav */}
      <NavWrapper>
        <NavText>
          Product <NavSpan>12</NavSpan>
        </NavText>

        <NavButtonWrapper className="smallBold">
          <NavButton1>Inventory</NavButton1>
          <Link href="/products/add-product">
            <a>
              <NavButton2>
                <Span>Add Product</Span> <PlusSVG />
              </NavButton2>
            </a>
          </Link>
        </NavButtonWrapper>
      </NavWrapper>

      {/* Filter */}
      <FilterWrapper>
        {/* Collections */}
        <FillterInnerWrapper>
          <FilterHeader className="small">Collections:</FilterHeader>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={collection}
              onChange={handleCollectionChange}
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
              sx={{ borderRadius: 9999 }}
            >
              <MenuItem value="">All Products</MenuItem>
              <MenuItem sx={{ color: "#929292" }} value={10}>
                Collection 1
              </MenuItem>
              <MenuItem sx={{ color: "#929292" }} value={20}>
                Collection 2
              </MenuItem>
              <MenuItem sx={{ color: "#929292" }} value={30}>
                Collection 3
              </MenuItem>
            </Select>
          </FormControl>
        </FillterInnerWrapper>

        <FillterInnerWrapper>
          <FilterHeader className="small">Filters:</FilterHeader>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={filter}
              onChange={handleFilterChange}
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
              sx={{ borderRadius: 9999 }}
            >
              <MenuItem value="">All Products</MenuItem>
              <MenuItem sx={{ color: "#929292" }} value={10}>
                In stock
              </MenuItem>
              <MenuItem sx={{ color: "#929292" }} value={20}>
                Digital
              </MenuItem>
              <MenuItem sx={{ color: "#929292" }} value={30}>
                Out of stock
              </MenuItem>
            </Select>
          </FormControl>
        </FillterInnerWrapper>
      </FilterWrapper>

      {/* Product lists */}
      <Products />
    </section>
  );
};

// Tailwind Styles
const NavWrapper = tw.nav`w-full mt-6 flex justify-between items-center`;
const NavText = tw.h5`inline`;
const NavSpan = tw.span`text-textBg-light`;
const NavButtonWrapper = tw.div`space-x-8 flex items-center`;
const NavButton = tw(
  Button
)`px-2 py-4 rounded-full w-[169px] transition duration-300`;
const NavButton1 = tw(NavButton)`border-2`;
const NavButton2 = tw(
  NavButton
)`bg-primary-darkest text-white flex items-center justify-center space-x-4`;
const Span = tw.span``;
const FilterWrapper = tw.div`flex justify-end space-x-8 items-center my-12`;
const FillterInnerWrapper = tw.div`flex items-center space-x-4`;
const FilterHeader = tw.div``;

export default ProductsDashboard;
