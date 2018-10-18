def get_name(person)
  return person[:name]
end
# 2.
def get_tv_show(tv_show)
  return tv_show[:favourites][:tv_show]
end
# 3.
def get_snack(person, snack)
  return snack  == person[:favourites][:snacks]
end
# 4.
def add_new_friend(person, friend_name)
  return person[:friends].push(friend_name)
end
# 5.
def unlike_friend(person, friend_name)
  person[:friends].delete(friend_name)
  return person[:friends]
end
# 6.
def total_of_everyones_money(everyone)
  total_money = 0
  for persons_money in everyone
    total_money += persons_money[:monies]
  end
  return total_money
end

# 7

# 8.
def all_snacks(everyone)
  snack = Array.new()
  for people in everyone
    snack.concat(people[:favourites][:snacks])
  end
  return snack
end

#9
def people_with_no_friends(everyone)
  friendless_people = Array.new()
  for people in everyone
    if people[:friends].length == 0
      friendless_people.push(people)
    end
  end
  return friendless_people
end
