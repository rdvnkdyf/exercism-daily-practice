class School:
    def __init__(self):
        self.school = {}
        self.add = []
    def add_student(self, name, grade):
        if name not in self.roster():
            self.school[grade] = self.school.get(grade, []) + [name]
            self.add.append(True)
        else:
            self.add.append(False)
    def added(self):
        return self.add
    
    def roster(self):
        return [name
                for grade in sorted(self.school.keys())
                for name in sorted(self.school[grade])]
    
    def grade(self, grade_number):
        return sorted(self.school.get(grade_number, []))