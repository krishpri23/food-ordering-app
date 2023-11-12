// Filter search when button is clicked
const filterResByName = (listOfRes, searchText) => {
  console.log("inside helpers ");
  try {
    // when no filtering is done, it returns the actual array itself
    return listOfRes.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  } catch (error) {
    console.error(error);
  }
};

export default filterResByName;
