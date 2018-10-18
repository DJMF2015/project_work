# Homework
## Exercise A
stops = [ "Croy", "Cumbernauld", "Falkirk High", "Linlithgow", "Livingston", "Haymarket" ]

# 1. Add `"Edinburgh Waverley"` to the end of the array
stops.push('Edinburgh Waverley')

 p stops

# 2. Add `"Glasgow Queen St"` to the start of the array
stops.unshift('Glasgow Queen St')
p stops

# 3. Add `"Polmont"` at the appropriate point (between `"Falkirk High"` and `"Linlithgow"`)
stops.insert(4,'Polmont')
# p stops

#4 position of livingston

p stops.index("Livingston")
# 5. Remove `"Livingston"` from the array using its name

stops.delete('Livingston')
# p stops

# 6. Delete `"Cumbernauld"` from the array by index
stops.delete_at(2)
# p stops

# 7. How many stops there are in the array?
p stops.length()
stops.count()
# 7

# 8. How many ways can we return `"Falkirk High"` from the array?
#answer
stops[2]
stops[-5]

# 9. Reverse the positions of the stops in the array
p stops.reverse

# 10. Print out all the stops using a for loop
for stop in stops
  p stop
end
