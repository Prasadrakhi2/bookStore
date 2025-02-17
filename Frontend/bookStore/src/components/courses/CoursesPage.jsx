import Courses from "../Courses";
import Footer from "../Footer";
import Navbar from "../navbar";
const CoursesPage = () => {
  return (
    <>
      <Navbar />
      <div className=" dark:bg-slate-900 ">
        <Courses />
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
