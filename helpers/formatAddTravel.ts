import { NewTravelState } from "../features/newTravel/newTravelSlice"

export const fotmadAddTravel (travel: NewTravelState) => {
    const formattedTravel = {
        ...travel,
        startDate: new Date(Date.parse(travel.)),
        endDate 
        name 
        googlePlaceId 
        formattedAddress 
        googleLocationName 
    }
}
/*
Object {
    "departure": 1661014980000,
    "destination": Object {
      "city": "",
      "country": "Germany",
      "googleId": "ChIJU2y_bMZ0sEcRiTCJup9cAdc",
      "latitude": 52.360017,
      "locationName": "Heinz von Heiden-Arena",
      "longitude": 9.731225,
      "state": "Niedersachsen",
    "uid": "1",
  },
*/

// "message": Array [
//     "startDate must be a valid ISO 8601 date string",
//     "startDate should not be empty",
//     "endDate must be a valid ISO 8601 date string",
//     "endDate should not be empty",
//     "name should not be empty",
//     "googlePlaceId should not be empty",
//     "formattedAddress should not be empty",
//     "googleLocationName should not be empty",
//   ],
