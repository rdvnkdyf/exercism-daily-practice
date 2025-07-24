class Result:
   def __init__(self,ok,msg):
       self.ok=ok; self.msg=msg
  
class Queen:
    @staticmethod
    def _is_valid (row, col):
        if row > 7: return Result(False, "row not on board")
        if col > 7: return Result(False, "column not on board")
        if row < 0: return Result(False, "row not positive")
        if col < 0: return Result(False, "column not positive")
        return Result(True, "")
    
    def __init__(self, row, column):
        retval = Queen._is_valid(row, column)
        if not retval.ok: raise ValueError(retval.msg)
        self.row = row; self.col = column
    
    def can_attack(self, other):
        if self.col == other.col and self.row == other.row:
            raise ValueError("Invalid queen position: both queens in the same square")
        return self.row == other.row or self.col == other.col or abs(self.row - other.row) == abs(self.col - other.col)
