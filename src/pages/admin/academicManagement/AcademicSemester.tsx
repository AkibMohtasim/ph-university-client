import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);

  console.log(data)


  return (
    <h1>This is AcademicSemester</h1>
  )
}
export default AcademicSemester;