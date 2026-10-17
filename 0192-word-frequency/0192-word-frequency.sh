# Read from words.txt and calculate the frequency of each word in a case-insensitive manner.
# Output the word and its frequency, sorted by frequency from highest to lowest.
# If two words have the same frequency, sort them in lexicographical order.

# cat words.txt | tr -s ' ' '\n' | tr '[:upper:]' '[:lower:]' | sort | uniq -c | sort -rn | awk '{ print $2, $1 }'

cat words.txt \
  | tr -s ' ' '\n' \
  | sort \
  | uniq -c \
  | sort -rn \
  | awk '{ print $2, $1 }'
