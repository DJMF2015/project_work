require('minitest/autorun')
require('minitest/rg')
require_relative('../student')


class TestStudent < MiniTest::Test



  def test_student_name
    student1 = Student.new("Ernest", "E26")
    assert_equal("Ernest", student1.name)
  end

  def test_student_cohort
    student2 = Student.new("alex",  "G10")
    assert_equal("G10", student2.cohort)
  end



end
