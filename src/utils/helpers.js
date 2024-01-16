// Filter search when button is clicked
const filterResByName = (listOfRes, searchText) => {
  try {
    // when no filtering is done, it returns the actual array itself
    return (
      listOfRes &&
      listOfRes.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  } catch (error) {
    console.error(error);
  }
};

export default filterResByName;
