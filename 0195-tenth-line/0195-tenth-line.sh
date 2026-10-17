# Given a text file file.txt, print just the 10th line of the file.
# If the file has fewer than 10 lines, output nothing.

# Solution 1: using sed
sed -n '10p' file.txt

# Solution 2: using awk
# awk 'NR==10' file.txt

# Solution 3: using tail + head
# tail -n +10 file.txt | head -1
