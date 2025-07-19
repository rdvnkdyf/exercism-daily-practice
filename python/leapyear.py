def leap_year(year):
  """
  Determines if a given year is a leap year according to the Gregorian calendar rules.

  A leap year occurs:
  - In every year that is evenly divisible by 4.
  - UNLESS the year is evenly divisible by 100, in which case it's only a leap year
    if the year is also evenly divisible by 400.

  Args:
    year: An integer representing the year.

  Returns:
    True if the year is a leap year, False otherwise.
  """
  # Rule 1: Divisible by 4. If not, it's definitely NOT a leap year.
  if year % 4 != 0:
    return False

  # At this point, the year IS divisible by 4.
  # Now, check the exceptions for years divisible by 100.

  # Rule 2: Divisible by 100.
  if year % 100 == 0:
    # If divisible by 100, it MUST also be divisible by 400.
    return year % 400 == 0
  else:
    # If divisible by 4 but NOT by 100, it IS a leap year.
    return True