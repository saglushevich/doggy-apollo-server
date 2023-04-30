import { RESTDataSource } from "apollo-datasource-rest";
import "../secrets";

export class DogAPI extends RESTDataSource {
  async getDog({ breed }) {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/dogs?name=${breed}`,
      {
        headers: {
          "X-Api-Key": process.env.DOG_API_KEY,
        },
      }
    );

    const data = await response.json();

    return data[0];
  }
}
