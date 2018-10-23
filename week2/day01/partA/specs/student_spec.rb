#sports_team_spec.rb
require('minitest/autorun')
require('minitest/rg')
require_relative('../student')


class TestStudent < MiniTest::Test

  def setup
    @student1 = Student.new("Ernest", "E26", "python")
  end

  def test_student_name
    expected = "Ernest"
    actual = @student1.name
    assert_equal(expected, actual)
  end

  def test_student_cohort
    expected = "E26"
    actual = @student1.cohort()
    assert_equal(expected, actual)
  end

  def test_change_cohort
    expected = "G26"
    actual = @student1.change_cohort("G26")
    assert_equal(expected, actual)
  end

  def test_change_name
    expected = "Joe"
    actual = @student1.change_name("Joe")
    assert_equal(expected, actual)
  end

  def test_i_can_talk()
    expected = "I can talk!"
    actual = @student1.call_talk() #nil
    assert_equal(expected, actual)
  end

  def test_student_language()
    expected = "I love Ruby"
    actual = @student1.favourite_language("Ruby")
    assert_equal(expected, actual)
  end


end
