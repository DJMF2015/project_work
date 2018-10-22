#homework- PartA, 22/10/2018
class Student

  def initialize(name, cohort, language)
    @name = name
    @cohort = cohort
    @language = language
  end

  def name
    return @name
  end

  def cohort
    return @cohort
  end

  def change_cohort(set_new_cohort)
    @cohort = set_new_cohort
  end

  def change_name(set_new_name)
    @name = set_new_name
  end

  def call_talk()
    return  "I can talk!"
  end

  def favourite_language(fav_language)
     return "I love " + fav_language
  end

end
