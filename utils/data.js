export const featuredQuery = `*[_type == "featured"] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
        type-> {
          name
        }
    }
      }  `;

export const OneFeaturedQuery = (featuredId) => {
 const query = `*[_type == "featured" && _id == '${featuredId}']{
    ...,
    restaurants[]->{
        ...,
        dishes[]->,
        type[]-> {
            name
        }
    }
}`;
 return query;
};

export const fetchCategory = `*[_type == "category"] {
    _id,
    name,
   image
  }`;
