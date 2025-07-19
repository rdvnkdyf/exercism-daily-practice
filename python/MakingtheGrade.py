def round_scores(student_scores):
    """Round all provided student scores.

    :param student_scores: list - float or int of student exam scores.
    :return: list - student scores *rounded* to nearest integer value.
    """
    return [round(score) for score in student_scores]


def count_failed_students(student_scores):
    """Count the number of failing students out of the group provided.

    :param student_scores: list - containing int student scores.
    :return: int - count of student scores at or below 40.
    """
    failed_count = 0
    for score in student_scores:
        if score <= 40:
            failed_count += 1
    return failed_count


def above_threshold(student_scores, threshold):
    """Determine how many of the provided student scores were 'the best' based on the provided threshold.

    :param student_scores: list - of integer scores.
    :param threshold: int - threshold to cross to be the "best" score.
    :return: list - of integer scores that are at or above the "best" threshold.
    """
    return [score for score in student_scores if score >= threshold]


def letter_grades(highest):
    """Create a list of grade thresholds based on the provided highest grade.

    :param highest: int - value of highest exam score.
    :return: list - of lower threshold scores for each D-A letter grade interval.
             For example, where the highest score is 100, and failing is <= 40,
             The result would be [41, 56, 71, 86]:

             41 <= "D" <= 55
             56 <= "C" <= 70
             71 <= "B" <= 85
             86 <= "A" <= 100
    """
    # Assuming a minimum passing score of 41 (D grade starts here)
    # and the highest score is included in the A grade.
    # The total range for passing scores is (highest - 40)
    # Divide this range into 4 equal intervals for D, C, B, A.
    
    grade_range = highest - 40
    interval_size = grade_range // 4

    # The lower bounds for D, C, B, A
    d_threshold = 41
    c_threshold = d_threshold + interval_size
    b_threshold = c_threshold + interval_size
    a_threshold = b_threshold + interval_size

    return [d_threshold, c_threshold, b_threshold, a_threshold]


def student_ranking(student_scores, student_names):
    """Organize the student's rank, name, and grade information in descending order.

    :param student_scores: list - of scores in descending order.
    :param student_names: list - of string names by exam score in descending order.
    :return: list - of strings in format ["<rank>. <student name>: <score>"].
    """
    ranked_students = []
    for i, (score, name) in enumerate(zip(student_scores, student_names)):
        ranked_students.append(f"{i + 1}. {name}: {score}")
    return ranked_students


def perfect_score(student_info):
    """Create a list that contains the name and grade of the first student to make a perfect score on the exam.

    :param student_info: list - of [<student name>, <score>] lists.
    :return: list - first `[<student name>, 100]` or `[]` if no student score of 100 is found.
    """
    for name, score in student_info:
        if score == 100:
            return [name, 100]
    return []
