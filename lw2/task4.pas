PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;

FUNCTION GetQueryStringParameter(Key: STRING): STRING; //¬сЄ круто, но если не указать параметр дл€ key,
VAR                                                    //то ничего не пишет, а должно выводить 'Not found'.
 Param: STRING;
BEGIN {GetQueryStringParameter}
  IF POS(Key, GetEnv('QUERY_STRING')) <> 0
  THEN
    BEGIN
      Param := COPY(GetEnv('QUERY_STRING'), POS(Key, GetEnv('QUERY_STRING')) + LENGTH(Key) + 1, 255);
      IF POS('&', Param) <> 0
      THEN
        GetQueryStringParameter := COPY(Param, 1, POS('&', Param) - 1)
      ELSE
        GetQueryStringParameter := Param
    END
 ELSE
    GetQueryStringParameter := 'Not found'
END; {GetQueryStringParameter}

BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}

