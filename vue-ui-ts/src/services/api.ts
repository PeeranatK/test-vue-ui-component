import http from "@/utils/http-common";

class api {
  getAll(): Promise<any> {
    return http.get("/pokemon");
  }

  get(id: any): Promise<any> {
    return http.get(`/pokemon/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/pokemon", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/pokemon/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/pokemon/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/pokemon`);
  }

  findByTitle(title: string): Promise<any> {
    return http.get(`/pokemon?title=${title}`);
  }
}

export default new api();