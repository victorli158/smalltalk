# def prime(n)
#   (2...n).each do |num|
#     return false if n % num == 0
#   end
#   true
# end
#
# def factors(n)
#   facts = []
#   (1..n).each do |num|
#     facts << num if n % num == 0
#   end
#   facts
# end
#
#
# # p factors(5)
# # p prime(6)
#
# def prime_factors(n)
#   facts = factors(n)
#   facts.select { |num| prime(num) && num > 1 }
# end
#
# # p prime_factors(6)
#
# def combine_arrays(arr1, arr2)
#   new_arr = []
#   arr1.each_index do |idx|
#     arr1[idx] > arr2[idx]
# end
#
# def crazy_nums(max)
#   nums = []
#   (3...max).each do |n|
#     nums << n if (n % 3 == 0 || n % 5 == 0) && (n % 15 != 0)
#   end
#   nums
# end
#
# p crazy_nums(10)
# p crazy_nums(20)

# def crazy_sum(arr)
#   arr.each_with_index {|n, idx| arr[idx] = n * idx }.reduce(:+)
# end
#
# p crazy_sum([2,3])
# p crazy_sum([2,3,5])
# p crazy_sum([2,3,5,2])

def combine_arrays(arr1, arr2)
  new_arr = []
  i = 0
  j = 0
  until i >= arr1.length && j >= arr2.length
    if arr1[i] && arr1[i] < arr2[j]
      new_arr << arr1[i]
      i += 1
    else
      new_arr << arr2[j]
      j += 1
    end
  end
  new_arr
end

p combine_arrays([1, 3, 5], [2, 4, 6])

def encrypt(str)
  letter_arr = []
  letter = str[0]
  count = 0

  str.each_char do |char|
    if char == letter
      count += 1
    else
      letter_arr << [letter, count]
      letter = char
      count = 1
    end
  end

  letter_arr << [letter, count] if count > 0
  letter_arr
end

p encrypt("aaabbcbbaaa")

def one_off_words(str, word_list)
  one_off = []

  word_list.each do |word|
    next if word.length != str.length
    diff_count = 0

    word.chars.each_index do |idx|
      diff_count += 1 if word[idx] != str[idx]
    end

    one_off << word if diff_count == 1
  end
  one_off
end

WORDS = ["door", "moot", "boot", "boots"]
p one_off_words("moor", WORDS)


def ordered_word?(str)
  str.chars.each_with_index do |ch, idx|
    next unless str[idx + 1]
    return false if ch > str[idx + 1]
  end
  true
end

p ordered_word?('zma')
p ordered_word?('aa')

def perfect_square(n)
  perf_count = 0
  i = 1

  while i ** 2 < n
    perf_count += 1
    i += 1
  end

  perf_count
end

p perfect_square(10)
p perfect_square(25)

def puppy_golden_age(arr)
  count = 0
  idx = nil

  (0...arr.length).each do |i|
    (i + 1...arr.length).each do |j|
      age_count = arr[i..j].reduce(:+)
      if age_count > count
        idx = [i, j]
        count = age_count
      end
    end
  end

  idx
end

p puppy_golden_age([100, -101, 200, -3, 1000])
p puppy_golden_age([5, 3, -5, 1, 19, 2, -4])

def subsets(arr)
  return [[]] if arr.empty?

  subs = subsets(arr[1..-1])
  other_subs = subs.map { |sub| sub + [arr[0]] }
  subs + other_subs
end

p subsets(["a", "b", "c"])
