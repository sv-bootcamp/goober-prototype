/**
 * Created by chan on 2016. 8. 24..
 */

export default (response) => {
  return {
    type: 'GET_MARKERS',
    categories: response.categories,
    markers: response.markers
  };
};
