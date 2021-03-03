PROGRAM HelloMyDear(INPUT, OUTPUT);
USES
  DOS;
VAR
  InString, ArgName, Space, Name: STRING;
  Num: INTEGER;
BEGIN {HelloMyDear}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  InString := GetEnv('QUERY_STRING');
  ArgName := COPY(InString, 1, 5);
  Space := COPY(InString, 6, 1);
  Num := LENGTH(InString);
  IF (ArgName = 'name=')
  THEN
    IF (Space <> ' ') AND (Num > 5)
    THEN
      BEGIN
        Name := COPY(InString, 6, Num);
        WRITELN('Hello dear, ', Name, '!')
      END
    ELSE
      WRITELN('Hello Anonymous!')
  ELSE
    WRITELN('Hello Anonymous!')
END. {HelloMyDear}

