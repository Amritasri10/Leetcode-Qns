# Given a text file file.txt, transpose its content.
# Each row becomes a column and each column becomes a row.
# Assume each row has the same number of columns, separated by ' '.

awk '
{
    for (i = 1; i <= NF; i++) {
        if (NR == 1) {
            col[i] = $i
        } else {
            col[i] = col[i] " " $i
        }
    }
    maxCol = NF
}
END {
    for (i = 1; i <= maxCol; i++) {
        print col[i]
    }
}
' file.txt
