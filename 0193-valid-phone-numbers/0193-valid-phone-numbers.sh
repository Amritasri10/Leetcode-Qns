# Read a file that contains list of phone numbers (one per line).
# Write a one-liner bash script to print all valid phone numbers.
# Valid formats: (xxx) xxx-xxxx or xxx-xxx-xxxx

grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt
