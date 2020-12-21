import React from 'react';

function FoodPage({ data }) {
  const dishes = data.dishes.edges;
  return (
    <div>
      <h1>We currently serve {dishes.length} dishes</h1>
    </div>
  );
}

export const DishQuery = graphql`
  query DishQuery {
    dishes: allSanityDish {
      edges {
        node {
          id
          name
          price
          Intolerences {
            name
          }
          image {
            asset {
              fluid(maxWidth: 400) {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default FoodPage;
