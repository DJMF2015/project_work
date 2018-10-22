require('minitest/autorun')
require('minitest/rg')
require_relative('../student')


class TestStudent < MiniTest::Test


  def test_student_name
      student1 = Student.new("Ernest", "E26", "python")
    assert_equal("Ernest", student1.name)
  end

  def test_student_cohort
    student1 = Student.new("Ernest", "E26", "python")
    assert_equal("E26", student1.cohort)
  end

  def test_change_cohort
    student1 = Student.new("Ernest", "E26", "python")
    student1.change_cohort("G11")
    assert_equal("G11", student1.cohort)
  end

  def test_change_name
    student1 = Student.new("Ernest", "E26", "python")
    student1.change_name("Joe")
    assert_equal("Joe", student1.name)
  end

  def test_i_can_talk()
    student1 = Student.new("Ernest", "E26", "python")
    assert_equal("I can talk!", student1.call_talk())
  end

  def test_student_language()
    student1 = Student.new("Ernest", "E26", "python")
    assert_equal("I love Ruby", student1.favourite_language("Ruby") )
  end


end
