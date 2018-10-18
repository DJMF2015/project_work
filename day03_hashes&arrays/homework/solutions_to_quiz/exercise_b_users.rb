users = {
  "Jonathan" => {
    :twitter => "jonnyt",
    :lottery_numbers => [6, 12, 49, 33, 45, 20],
    :home_town => "Stirling",
    :pets => [
      {
        :name => "fluffy",
        :species => "cat"
      },
      {
        :name => "fido",
        :species => "dog"
      },
      {
        :name => "spike",
        :species => "dog"
      }
    ]
  },
  "Erik" => {
    :twitter => "eriksf",
    :lottery_numbers => [18, 34, 8, 11, 24],
    :home_town => "Linlithgow",
    :pets => [
      {
        :name => "nemo",
        :species => "fish"
      },
      {
        :name => "kevin",
        :species => "fish"
      },
      {
        :name => "spike",
        :species => "dog"
      },
      {
        :name => "rupert",
        :species => "parrot"
      }
    ]
  },
  "Avril" => {
    :twitter => "bridgpally",
    :lottery_numbers => [12, 14, 33, 38, 9, 25],
    :home_town => "Dunbar",
    :pets => [
      {
        :name => "monty",
        :species => "snake"
      }
    ]
  }
}

#1. Get Jonathan's Twitter handle (i.e. the string `"jonnyt"`)
p users["Jonathan"][:twitter]
# 2. Get Erik's hometown
p users["Erik"][:home_town]
# 3. Get the array of Erik's lottery numbers
p users["Erik"][:lottery_numbers]
# 4. Get the type of Avril's pet Monty
p users["Avril"][:pets][0][:species]
# 5. Get the smallest of Erik's lottery numbers
p users["Erik"][:lottery_numbers].min()

# 6. Return an array of Avril's lottery numbers that are even
result = []
for numb in users["Avril"][:lottery_numbers]
  # users["Avril"][:lottery_numbers].each do |numb|
  # p numb if numb.even?
# -------------------------------
  # if numb % 2 == 0
  # result.push(numb)
  result.push(numb) if numb.even?
end
p result
# p users["Avril"][:lottery_numbers].select {|number|} number % 2 == 0) #select retrieves value if condition

# 7. Erik is one lottery number short! Add the number `7` to be included in his lottery numbers
p users["Erik"][:lottery_numbers].unshift(7)
  var = users["Erik"][:lottery_numbers]
p var
# 8. Change Erik's hometown to Edinburgh
p users["Erik"][:home_town] = "Edinburgh"

# 9. Add a pet dog in :pets array to Erik called "Fluffy"
pet =
{
  :name => "Fluffy",
  :species => "dog"
}
p users["Erik"][:pets] << pet

# 10. Add another person to the users hash
another_person  = {
  :twitter => "Dave",
  :lottery_numbers => [6, 14, 35],
  :home_town => "Edinburgh",
  :pets => [
    {
      :name => "Dumpy",
      :species => "dog"
    }
  ]
}
users["David"] = another_person
p users
