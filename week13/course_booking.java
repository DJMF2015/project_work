// Queries + Custom Routes
// The basic CRUD aspects of the normal RESTful routes should be enabled with Spring Data REST. However there are a few specific routes that should be implemented and connected to custom criteria queries. These are:
//Custom queres


// Get all courses for a given customer
// Get all bookings for a given date


// Get all courses with a given rating
// .courseContrller
@RestController
@RequestMapping("/courses")
public class CourseController {

  @Autowired
  CourseRepository courseRepository;

  @GetMapping(value = "/stars/{rating}")
  public List<Course> coursesForStarRating(@PathVariable int rating){
    return courseRepository.getCoursesForStarRating(rating);
  }
  @GetMapping(value = "/stars/{rating}")
  public List<Course> coursesForStarRating(@PathVariable int rating){
    return courseRepository.getCoursesForStarRating(rating);
  }

  // ---------------------------------
  // CourseRepository.java
  @Repository
  public interface CourseRepository extends JpaRepository<Course, Long>, CourseRepositoryCustom {
    List<Course> getCoursesForGivenRating(int rating);

    List<Customer> getAllCustomersForCourse(Long id);
    // ---------------------------------

    // CourseRepositoryCustom.java
    public interface CourseRepositoryCustom {
      List<Course> getCoursesForGivenRating(int rating);

      List<Customer>getAllCustomersForCourse(Long id);
      // ---------------------------------

      //CourseRepositoryImpl
      public class CourseRepositoryImpl implements CourseRepositoryCustom {
        @Autowired
        EntityManager entityManager;

        @Transactional
        public List<Course> getCoursesForGivenRating(int rating){
          List<Course> result = null;

          Session session = entityManager.unwrap(session.class)
          try{
            Criteria cr = session.createCriteria(Course.class)//starting point
            // cr.createAlias("starRating", "ratingAlias" );
            cr.add(Restrictions.eq("starRating" ,rating));
            result =  cr.list(); //need list back and to cast
          }
          catch(HibernateException ex{
            ex.printStackTrace();
          }
          return result; //return after try/catch
          // The getCoursesForGivenRating(String firstName) method can now be used anywhere we've injected a PirateRepository.

          // Get all customers for a given course
          @Transactional
          public List<Customer> getAllCustomersForCourse(Long id){
            List <Customer> result = null;
            Session session = entityManager.unwrap(Session.class)
            try{
              Critera cr = session.createCriteria(Customer.class)
              cr.createAlias("bookings", "booking")
              cr.createAlias("booking.course", "course")
              cr.add(Restrictions.eq("course.id", id));
              result = cr.list();
            }
            catch (HibernateException ex){
              ex.printStackTrace;
            }  } finally {
              session.close();
            }
            return result;
          }
