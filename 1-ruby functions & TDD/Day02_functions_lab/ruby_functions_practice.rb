

def return_10
  return 10
end

def add(num1, num2)
  result = num1 + num2
  return result
end

def subtract(num1, num2)
  result = num1 - num2
  return result
end

def multiply(num1, num2)
 result = num1 * num2
 return result
end

def divide(num1, num2)
  result = num1 / num2
  return result
end

def length_of_string(test_string)
   result = test_string.length()
   return result
end

def join_string(string1, string2)
  result = string1 + string2
  return result
end

def add_string_as_number(num1, num2)
 result = num1.to_i() + num2.to_i()
 return result
end

def number_to_full_month_name(month_number)
  case month_number
  when 1
    return "January"
  when 2
    return "February"
  when 3
    return "March"
  when 4
    return "April"
  when 5
    return "May"
  when 6
    return "June"
  when 7
    return "July"
  when 8
    return "August"
  when 9
    return "September"
  when 10
    return "October"
  when 11
    return "November"
  else
    return "December"
  end
end

def number_to_short_month_name(month_number)
  case month_number
  when 1
    return "Jan"
  when 2
    return "Feb"
  when 3
    return "Mar"
  when 4
    return "Apr"
  when 5
    return "May"
  when 6
    return "June"
  when 7
    return "Jul"
  when 8
    return "Aug"
  when 9
    return "Sep"
  when 10
    return "Oct"
  when 11
    return "Nov"
  when 12
    return "Dec"
  end
end

def cube(side_length)
  result = side_length ** 3
  return result
end

def sphere(radius)
  volume = (4.0 / 3.0) * Math::PI * (radius ** 3.0)
  return volume.round(6)
end

def fah_to_celsius(celsius)
result = (celsius - 32) / 1.8
return result.round(2)
end
