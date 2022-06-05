import { getStudent } from "../api/student";

const StudentDetail = {
  render: async (id) => {
    const response = await getStudent(id);
    const { data } = response;
    return `    <div>
    <div>Id: ${data.id}</div>
    <div>Name: ${data.name}</div>
    <div>MSV: ${data.msv}</div>
  </div>;`;
  },
};

export default StudentDetail;
