def rec_factorials(n)
  return 1 if n == 1
  n * rec_factorials(n - 1)
end

# def rec_fib(n)
#   fib = [0,1]
#   return fib.take(n) if n < 3
#   fib = rec_fib(n - 1)
#   fib << fib[-1] + fib[-2]
# end

def range(start_num, end_num)
  return [end_num] if start_num == end_num
  range(start_num - 1, end_num) + [start_num]
end

def sum_rec(num)
  return num if num == 1
  sum = num
  sum += sum_rec(num - 1)
end

# def exp_rec(base, exp)
#   return 1 if exp == 0
#   base * exp_rec(base, exp - 1)
# end

def deep_dup(array)
  new_array = []

  array.each do |el|
    if el.is_a?(Array)
      el.deep_dup(el)
    else
      new_array << el
    end
  end
  new_array
end

def rec_fib(n)
  fib = [0,1]
  return fib.take(n) if n < 3
  fib = rec_fib(n - 1)
  fib << rec_fib(n-1)[-1] + rec_fib(n-1)[-2]
end

# def exp_rec(base, exp)
#   return 1 if exp == 0
#   base * exp_rec(base, exp - 1)
# end

class Array
  # def my_each(&prc)
  #   i = 0
  #   while i < length
  #     prc.call(self[i])
  #     i += 1
  #   end
  # end

  def my_select(&prc)
    selected = []
    my_each do |el|
      selected << el if prc.call(el)
    end
    selected
  end

  def my_reduce(accum = self[0])
    each do |el|
      accum = yield(accum, el)
    end
    accum
  end

  def my_reject(&prc)
    rejected = []
    my_each do |el|
      rejected << el unless prc.call(el)
    end
    rejected
  end

  # def my_reduce(accum, &prc)
  #   each do |el|
  #     accum = prc.call(accum, el)
  #   end
  #   accum
  # end

  def divide(n)
    divided_arr = []
    i = 0
    while i < length
      divided_arr << [self[i], self[i+1]]
      i += 2
    end
    divided_arr
  end

  def my_all?(&prc)
    each do |el|
      return false unless prc.call(el)
    end
  end

  def my_any?(&prc)
    my_each do |el|
      return true if prc.call(el)
    end
  end

  def my_none?(&prc)
    my_each do |el|
      return false if prc.call(el)
    end
    true
  end

  def my_each(&prc)
    i = 0
    while i < length
      prc.call(self[i])
      i += 1
    end
  end

  def one?
    count = 0
    each do |el|
      count += 1 if yield(el)
    end
    return true if count == 1
    false
  end

  # def my_reduce(accum = self[0], &prc)
  #   each do |el|
  #     accum = prc.call(accum, el)
  #   end
  #   accum
  # end
end

# def two_sum(array)
#   sum_zero = []
#   i = 0
#   j = 1
#   while i < array.length
#     while j < array.length
#       sum_zero << [i, j] if array[i] + array[j] == 0
#       j += 1
#     end
#     j = 0
#     i += 1
#   end
#   sum_zero
# end

def two_sum(arr)
  zero_sums = []
  arr.each_index do |i|
    arr[i + 1..-1].each_index do |j|
      zero_sums << [i, j] if arr[i] + arr[j] == 0 && j > i
    end
  end
  zero_sums
end


  class Array
    def subsets
      debugger
      return [[]] if empty?
      subs = take(count - 1).subsets
      subs.concat(subs.map { |sub| sub + [last] })
    end
  end
