PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;

FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR                                                    
 Param, Querystring: STRING;
 PosKey: INTEGER; 
BEGIN {GetQueryStringParameter}
  Querystring := GetEnv('QUERY_STRING');
  PosKey := POS(Key, GetEnv('QUERY_STRING'));
  IF (PosKey <> 0) AND (COPY(Querystring, PosKey + LENGTH(Key), 1) = '=') AND ((COPY(Querystring, PosKey + LENGTH(Key) + 1, 1) <> '&') AND (COPY(Querystring, PosKey + LENGTH(Key) + 1, 1) <> ''))
  //Переделать 
  THEN
    BEGIN
      Param := COPY(Querystring, PosKey + LENGTH(Key) + 1, 255);
      IF POS('&', Param) <> 0
      THEN
        GetQueryStringParameter := COPY(Param, 1, POS('&', Param) - 1)
      ELSE
        GetQueryStringParameter := Param;
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
