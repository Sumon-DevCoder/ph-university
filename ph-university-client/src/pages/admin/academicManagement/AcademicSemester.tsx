import { academicSemesterApi } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = academicSemesterApi.useGetAllSemesterQuery(undefined);

  console.log(data);

  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
