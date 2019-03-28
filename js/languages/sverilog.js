/*
Language: System Verilog
Author: Aditya Kashiappa <akashiappa@gmail.com>
Description: System Verilog is a hardware description and hardware verification language used to model, design, simulate, test and implement electronic systems. SystemVerilog is based on Verilog and some extensions, and since 2008 Verilog is now part of the same IEEE standard
*/

hljs.registerLanguage('sverilog', function(hljs) {
  var SV_KEYWORDS = {
    keyword:'begin case casex casez class clocking config function generate covergroup interface module package primitive program property specify sequence table task ' +
            'end endcase endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask ' +
            'alias always always_comb always_ff always_latch and assert assign assume automatic before bind bins binsof break cmos constraint context continue cover cross deassign default design disable ' +
            'dist do edge else expect export extends extern final first_match for force foreach forever fork forkjoin if iff ifnone ignore_bins illegal_bins import incdir include initial inside instance ' +
            'intersect join join_any join_none liblist library macromodule matches medium modport nand negedge new nmos nor noshowcancelled not notif0 notif1 null or packed pmos posedge priority protected ' +
            'pulsestyle_onevent pulsestyle_ondetect pure rand randc randcase randsequence rcmos realtime ref reg release repeat return rnmos rpmos rtran rtranif0 rtranif1 scalared showcancelled solve tagged ' +
            'this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg unique use vectored wait wait_order wand weak0 weak1 while wildcard wire with within wor xnor xor ' +
            '$assertkill $assertoff $asserton $bits $bitstoreal $bitstoshortreal $cast $comment $countdrivers $countones $dimensions $display $dist_chi_square $dist_erlang $dist_exponential $dist_normal ' +
            '$dist_poisson $dist_t $dist_uniform $dumpall $dumpfile $dumpflush $dumplimit $dumpoff $dumpon $dumpvars $error $exit $fatal $fclose $fdisplay $fell $feof $ferror $fflush $fgetc $fgets $finish ' +
            '$fmonitor $fopen $fread $fscanf $fseek $fstrobe $ftell $fullskew $fwrite $get_coverage $getpattern $high $history $hold $increment $incsave $info $input $isunbounded $isunknown $itor $key $left ' +
            '$list $load_coverage_db $log $low $monitor $monitoroff $monitoron $nochange $nokey $nolog $onehot $onehot0 $past $period $printtimescale $q_add $q_exam $q_full $q_initialize $q_remove $random ' +
            '$readmemb $readmemh $realtime $realtobits $recovery $recrem $removal $reset $reset_count $reset_value $restart $rewind $right $root $rose $rtoi $sampled $save $scale $scope $set_coverage_db_name ' +
            '$setup $setuphold $sformat $shortrealtobits $showscopes $showvariables $showvars $signed $size $skew $sreadmemb $sreadmemh $sscanf $stable $stime $stop $strobe $swrite $time $timeformat $timescale ' +
            '$timeskew $typename $typeof $uandom $ungetc $unit $unpacked_dimensions $unsigned $upscope $urandom_range $value$plusargs $var $vcdclose $version $warning $width $write `begin_keywords `celldefine ' +
            'bit buf bufif0 bufif1 byte cell chandle const coverpoint defparam enum event genvar highz0 highz1 inout input int integer large local localparam logic longint output parameter pull0 pull1 ' +
            'pulldown pullup real shortint shortreal signed small specparam static string strong0 strong1 struct super supply0 supply1 type typedef union unsigned var virtual void '
    };
  var SV_PREPROC_KEYWORDS = {
      keyword:'default_decay_time default_nettype default_trireg_strength define delay_mode_distributed delay_mode_path delay_mode_unit delay_mode_zero else elsif end_keywords endcelldefine endif ' +
              'ifdef ifndef include line nounconnected_drive pragma resetall timescale unconnected_drive undef '  
  };
  return {
    aliases: ['sv', 'svh'],
    case_insensitive: true,
    keywords: SV_KEYWORDS,
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'preprocessor', relevance: 5,
        begin: '`', end: '$',
        keywords: SV_PREPROC_KEYWORDS,
        contains: [
          {
            begin: /\\\n/, relevance: 0
          },
          {
            begin: 'include\\s*[<"]', end: '[>"]',
            keywords: 'include',
            illegal: '\\n'
          },
          hljs.C_LINE_COMMENT_MODE
        ]
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'number',
        begin: '\\b(\\d+\'(b|h|o|d|B|H|O|D))?[0-9xzXZ]+',
        contains: [hljs.BACKSLASH_ESCAPE],
        relevance: 0
      },
      /* ports in instances */
      {
        className: 'typename',
        begin: '\\.\\w+',
        relevance: 0
      },
      /* parameters to instances */
      {
        className: 'value',
        begin: '#\\((?!parameter).+\\)'
      },
      /* operators */
      {
        className: 'keyword',
        begin: '\\+|-|\\*|/|%|<|>|=|#|`|\\!|&|\\||@|:|\\^|~|\\{|\\}',
        relevance: 0
      }
    ]
  }; // return
})
