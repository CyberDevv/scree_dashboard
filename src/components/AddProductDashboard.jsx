import tw from "twin.macro";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import {
  IconButton,
  Breadcrumbs,
  TextField as MUITextField,
} from "@mui/material";

import "react-quill/dist/quill.snow.css";
import { Button } from "./TailwindStyles";
import Collection from "./Collection.jsx";
import TaggedTextField from "./TaggedTextfield.jsx";
import { addProduct } from "../firebase/products.firebase";
import PlusOutlinedSVG from "../../public/svg/plusoutline.svg";
import SelectMediaPlaceholderSVG from "../../public/svg/selectMediaPlaceholder.svg";
import {
  FileItem,
  FileItemContainer,
  FullScreenPreview,
  InputButton,
} from "@dropzone-ui/react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddProductDashboard = () => {
  const [media, setMedia] = useState([]);
  const [price, setPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [productDescription, setProductDescription] = useState("");
  const [collections, setCollections] = useState([
    {
      id: 0,
      checked: true,
      task: "Sofa",
    },
    {
      id: 1,
      checked: false,
      task: "All Products",
    },
  ]);
  const [imgSource, setImgSource] = useState(false);

  const user = useSelector((state) => state.user.user.uid);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleSave = async () => {
    addProduct(
      user,
      media,
      productName,
      selectedItem,
      price,
      collections,
      productDescription
    );
  };

  const updateFiles = (incommingFiles) => {
    let newMedia = [...media];
    newMedia = newMedia.concat(incommingFiles);
    setMedia(newMedia);
  };

  const onDelete = (id) => {
    setMedia(media.filter((x) => x.id !== id));
  };

  // function handleSelecetedTags(items) {
  //    // console.log(items);
  // }

  return (
    <>
      {/* Breadcrumb */}
      <BreadcrumbsWrapper separator=">>" aria-label="breadcrumb">
        <Link href="/products" passHref>
          <BAnchor className="body">Products</BAnchor>
        </Link>
        ,
        <PresentPageText className="bodyBold">
          {productName ? productName : "Untitled Product"}
        </PresentPageText>
        ,
      </BreadcrumbsWrapper>

      {/* Nav */}
      <NavWrapper>
        <NavText>{productName ? productName : "Untitled Product"}</NavText>

        <NavButtonWrapper className="smallBold">
          <NavButton1>Cancel</NavButton1>
          <NavButton2 onClick={handleSave}>Save</NavButton2>
        </NavButtonWrapper>
      </NavWrapper>

      {/* Main Section */}
      <Section>
        <Main>
          {/* Upload Media */}
          <Wrapper>
            <UploadMediaText>Upload Media</UploadMediaText>

            <FileItemContainer view="list">
              <Div>
                {/* upload button */}
                <IconButton tw="overflow-hidden rounded-2xl">
                  <label htmlFor="contained-button-file">
                    <InputButton
                      onChange={updateFiles}
                      label="browse images..."
                      accept="image/*,video/*"
                      multiple
                      style={{
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: 0,
                        width: "100%",
                      }}
                    />
                    <SelectMediaPlaceholderSVG />
                  </label>
                </IconButton>

                {/* list */}
                {media.map((validatedFile) => (
                  <ImageWrapper key={validatedFile.id}>
                    <FileItem
                      {...validatedFile}
                      onDelete={onDelete}
                      onSee={(src) => {
                        setImgSource(src);
                      }}
                      preview
                      hd
                      style={{ width: "inherit", margin: "0" }}
                      //localization={"ES-es"}
                    />
                  </ImageWrapper>
                ))}
                <FullScreenPreview
                  imgSource={imgSource}
                  openImage={imgSource}
                  onClose={(e) => setImgSource(undefined)}
                />
              </Div>
            </FileItemContainer>
          </Wrapper>

          {/* Editor */}
          <div>
            <Wrapper>
              <p className="smallBold">Product Description</p>
            </Wrapper>
            <ReactQuill
              value={productDescription}
              onChange={(value) => setProductDescription(value)}
              modules={modules}
              formats={formats}
              placeholder="Enter your product description here"
            ></ReactQuill>
          </div>

          {/* Pricing */}
          <Wrapper>
            <p className="smallBold">Pricing</p>

            <PriceFieldWrapper>
              <Label htmlFor="addProduct">
                Price
                <TextField
                  type="text"
                  id="addProduct"
                  placeholder="₦20,000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Label>
            </PriceFieldWrapper>
          </Wrapper>
        </Main>

        {/* Aside */}
        <Aside>
          {/* Basic Info */}
          <Wrapper>
            <p className="smallBold">Basic Info</p>

            <Form>
              {/* product name */}
              <div>
                <Label htmlFor="addProduct">
                  Name
                  <TextField
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    fullWidth
                    placeholder="Add product name"
                  />
                </Label>
              </div>

              {/* product tag */}
              <div>
                <Label htmlFor="addTag">
                  Add Tag
                  <TagField
                    fullWidth
                    // selectedTags={handleSelecetedTags}
                    id="tags"
                    placeholder="New Arrivals"
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                  />
                </Label>
              </div>
            </Form>
          </Wrapper>

          {/* Add to collection */}
          <Wrapper>
            <p className="smallBold">Add to Collection</p>

            <Collectionss>
              <Collection
                setCollections={setCollections}
                collections={collections}
              />

              <EachCollectionWrapper>
                <PlusOutlinedSVG />
                <CreateCollectionText>
                  Create a new collection
                </CreateCollectionText>
                {/* <InputAddCollection
                           type='text'
                           placeholder='Add your task'
                           // onKeyDown={handleOnEnter}
                        /> */}
              </EachCollectionWrapper>
            </Collectionss>
          </Wrapper>
        </Aside>
      </Section>
    </>
  );
};

// Tailwind Styles
const BAnchor = tw.a`text-textBg-light cursor-pointer hover:underline`;
const PresentPageText = tw.p`text-textBg-dark`;
const BreadcrumbsWrapper = tw(Breadcrumbs)`mt-8`;
const NavWrapper = tw.nav`w-full mt-6 flex justify-between items-center`;
const NavText = tw.h5`inline`;
const NavButtonWrapper = tw.div`space-x-8 flex items-center`;
const NavButton = tw(
  Button
)`px-2 py-4 rounded-full w-[169px] transition duration-300`;
const NavButton1 = tw(NavButton)`border-2`;
const NavButton2 = tw(
  NavButton
)`bg-primary-darkest text-white flex items-center justify-center space-x-4`;
const Section = tw.div`grid grid-cols-[1.5fr 1fr] my-4 gap-x-8 pb-20`;
const Main = tw.main`column-span[1.5fr] space-y-8`;
const Aside = tw.aside`space-y-8`;
const Wrapper = tw.div`bg-white rounded-2xl px-5 py-7`;
const UploadMediaText = tw.h6`text-xl`;
const Div = tw.div`mt-8 grid grid-cols-3 gap-4 content-center items-center`;
const Input = tw.input`hidden`;
const ImageWrapper = tw.div`relative w-full max-w-[250px] h-[120px] rounded-2xl overflow-hidden`;
const Form = tw.form`mt-8 space-y-7`;
const Label = tw.label``;
const TextField = tw(MUITextField)`block max-w-[350px] px-3.5 py-2.5`;
const TagField = tw(TaggedTextField)`block max-w-[350px] px-3.5 py-2.5`;
const Collectionss = tw.div`mt-7`;
const EachCollectionWrapper = tw.div`flex space-x-4 mb-4 items-center`;
const CreateCollectionText = tw.p`text-secondary-darkest`;
const PriceFieldWrapper = tw.div`mt-7`;

export default AddProductDashboard;
